FROM node:18-alpine3.16

# Install OS packages to increase CVE surface
# This is a DEMO image - intentionally vulnerable for security tool testing
# NEVER use this approach in production
RUN apk add --no-cache \
    ca-certificates \
    curl \
    tzdata \
    libssl3 \
    libcrypto3 \
    libgcc \
    libstdc++ \
    busybox-extras \
    bind-tools \
    iproute2 \
    iputils \
    net-tools \
    openssh-client \
    file \
    tar \
    unzip \
    xz

# Create non-root user for security best practices
RUN addgroup -g 10001 appuser && \
    adduser -D -u 10001 -G appuser appuser

# Set working directory
WORKDIR /app

# Copy application files
COPY server.js package.json ./

# Switch to non-root user
USER 10001:10001

# Expose application port
EXPOSE 3000

# Health check using curl against the /healthz endpoint
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -fsS http://127.0.0.1:3000/healthz || exit 1

# Run the application
CMD ["node", "server.js"]