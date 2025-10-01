FROM node:16-alpine3.15

# Lock to Alpine 3.15 repos to get vulnerable packages
RUN echo "http://dl-cdn.alpinelinux.org/alpine/v3.15/main" > /etc/apk/repositories && \
    echo "http://dl-cdn.alpinelinux.org/alpine/v3.15/community" >> /etc/apk/repositories

# Install packages (gets vulnerable 3.15 versions automatically)
# Do NOT run 'apk upgrade'
RUN apk add --no-cache \
    ca-certificates \
    curl \
    tzdata \
    openssl \
    libssl1.1 \
    libcrypto1.1 \
    busybox \
    openssh-client \
    git \
    bind-tools \
    zlib \
    libxml2 \
    libxslt \
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