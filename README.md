\# Node.js Alpine Vulnerability Demo for Root.io



A deliberately \*\*"vulnerable-enough"\*\* Node.js container on Alpine Linux 3.16 designed to showcase Root.io's OS-level package remediation across different Linux distributions. This demonstrates that Root.io's Active Vulnerability Remediation (AVR) works on both \*\*Debian (glibc)\*\* and \*\*Alpine (musl libc)\*\* families.



\## ⚠️ CRITICAL WARNING



\*\*THIS IMAGE IS FOR DEMO AND TESTING PURPOSES ONLY.\*\*



\- Contains intentionally outdated Alpine packages

\- Should NEVER be deployed to production environments

\- Should NEVER be exposed to the internet

\- Should ONLY be used in isolated, controlled environments for security tool demonstrations



\## What This Is



This repository contains a minimal Node.js HTTP server built on Alpine Linux 3.16 that:



1\. \*\*Uses Alpine 3.16 base\*\* (released May 2022, ~2.5 years old)

2\. \*\*Does NOT run `apk upgrade`\*\* to preserve original package versions

3\. \*\*Installs ~17 apk packages\*\* with known CVE histories (libssl3, openssh-client, curl, etc.)

4\. \*\*Uses only Node.js stdlib\*\* (no npm dependencies - zero application CVEs)

5\. \*\*Follows security best practices\*\* (non-root user, healthchecks) while remaining vulnerable



\*\*Expected scan results:\*\* 20-40+ CVEs in Alpine system packages



\## Why Alpine Linux?



\### Cross-Distro Demonstration



This Alpine demo complements the Debian-based demos (Python, Java) to prove Root.io works across:



| Distribution | C Library | Package Manager | Use Case |

|--------------|-----------|-----------------|----------|

| \*\*Debian Bookworm\*\* | glibc | apt/dpkg | Enterprise, traditional |

| \*\*Alpine 3.16\*\* | musl libc | apk | Containers, microservices |



\*\*Key insight:\*\* Root.io remediates OS packages regardless of the underlying distribution or C library implementation.



\### Why Alpine 3.16 Specifically?



\- \*\*Age:\*\* Released May 2022 (~2.5 years old) - accumulated CVEs without updates

\- \*\*Root.io support:\*\* Alpine 3.16-3.22 fully supported for AVR

\- \*\*Production-representative:\*\* Many Node.js containers use Alpine for size

\- \*\*Smaller but vulnerable:\*\* Fewer packages than Debian, but still 20-40+ CVEs

\- \*\*musl libc:\*\* Different from glibc, demonstrates Root.io handles both



\### The Package Strategy



Alpine's minimal philosophy means fewer packages, but we still install common utilities:



\*\*Core vulnerabilities:\*\*

\- `libssl3` / `libcrypto3` - OpenSSL libraries (frequent CVE source)

\- `openssh-client` - SSH client (authentication/crypto CVEs)

\- `curl` - HTTP client (TLS, certificate validation CVEs)



\*\*Supporting utilities:\*\*

\- `busybox-extras` - Extended BusyBox utilities

\- `bind-tools` - DNS tools (dig, nslookup)

\- `tar`, `unzip`, `xz` - Compression utilities (buffer overflow CVEs)



All are standard Alpine packages that:

\- Are safe to install (no malware)

\- Have known CVE entries in security databases

\- Are commonly found in production Alpine containers

\- Will be flagged by Trivy, Grype, and other scanners



\## Local Build and Run



\### Prerequisites



\- Docker installed

\- No Node.js required locally (containerized)



\### Build the Image

```bash

