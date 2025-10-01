FROM node:18-alpine3.15

# Install vulnerable OS packages with specific older versions
# This is a DEMO image - intentionally vulnerable for security tool testing
# NEVER use this approach in production

# First, ensure we're using the older Alpine 3.15 repository
RUN echo "http://dl-cdn.alpinelinux.org/alpine/v3.15/main" > /etc/apk/repositories && \
    echo "http://dl-cdn.alpinelinux.org/alpine/v3.15/community" >> /etc/apk/repositories

# Install packages with known vulnerabilities (pinned to 3.15 versions)
RUN apk add --no-cache \
    ca-certificates \
    curl \
    tzdata \
    libssl1.1 \
    libcrypto1.1 \
    busybox=1.34.1-r3 \
    openssh-client=8.8_p1-r1 \
    bind-tools=9.16.22-r0 \
    git=2.34.1-r0 \
    openssl=1.1.1l-r8 \
    zlib=1.2.11-r3 \
    libxml2=2.9.12-r2 \
    libxslt=1.1.34-r1 \
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