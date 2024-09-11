FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set environments
ARG VITE_APP_API_BASE_URL
ENV VITE_APP_API_BASE_URL=${VITE_APP_API_BASE_URL}


RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

# Copy public directory
COPY --from=builder /app/public ./public

# Copy built files from the builder stage
COPY --from=builder /app/dist ./dist


EXPOSE 7000

CMD [ "npm", "run", "dev" ]