# ==============================================================================
# Direct Local to GCP Compute Engine Deployment Script
# Target Instance: balaji (Zone: asia-south1-b, IP: 35.244.41.125)
# ==============================================================================

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host " Starting Direct Deployment to GCP Server (balaji)...     " -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

$INSTANCE_NAME = "balaji"
$ZONE = "asia-south1-b"
$REMOTE_DIR = "portfolio-build"

# Step 1: Clean up old build folder on server
Write-Host "`n[1/3] Preparing remote server directory..." -ForegroundColor Yellow
gcloud compute ssh $INSTANCE_NAME --zone=$ZONE --command="rm -rf $REMOTE_DIR && mkdir -p $REMOTE_DIR"

# Step 2: Upload source files
Write-Host "`n[2/3] Uploading source files to GCP instance ($INSTANCE_NAME)..." -ForegroundColor Yellow
Write-Host "Note: Uploading src, public, configuration, and Docker files..." -ForegroundColor DarkGray

gcloud compute scp --recurse --zone=$ZONE `
    src `
    public `
    index.html `
    package.json `
    package-lock.json `
    tsconfig.json `
    tsconfig.app.json `
    tsconfig.node.json `
    vite.config.ts `
    eslint.config.js `
    Dockerfile `
    .dockerignore `
    nginx.conf `
    "${INSTANCE_NAME}:${REMOTE_DIR}/"

# Step 3: Build Docker Image on VM and Run
Write-Host "`n[3/3] Building Docker image and starting live Nginx container on GCP..." -ForegroundColor Yellow
$DEPLOY_CMD = @"
cd $REMOTE_DIR && \
echo '--> Building production Docker image...' && \
sudo docker build -t balaji-portfolio:latest . && \
echo '--> Stopping existing container (if any)...' && \
sudo docker rm -f portfolio-live 2>/dev/null || true && \
echo '--> Starting live container on Port 8080...' && \
sudo docker run -d --restart=always -p 8080:80 --name portfolio-live balaji-portfolio:latest && \
echo '--> Pruning old unused build images...' && \
sudo docker image prune -f && \
echo '=========================================================================' && \
echo ' SUCCESS! Your portfolio is LIVE at: https://balajisuryavanshi.site/ ' && \
echo '========================================================================='
"@

gcloud compute ssh $INSTANCE_NAME --zone=$ZONE --command="$DEPLOY_CMD"

Write-Host "`nDeployment completed! Visit http://35.244.41.125/ in your browser." -ForegroundColor Green
