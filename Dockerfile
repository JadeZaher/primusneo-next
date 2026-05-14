FROM node:20-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ENV SKIP_ENV_VALIDATION=true
RUN npm run build

# Stage 2: Production
FROM node:20-slim AS production
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup --system appgroup && adduser --system --ingroup appgroup appuser
COPY --from=builder /app/package*.json ./
RUN npm ci --only=production && npm cache clean --force
COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/next.config.js next.config.js
EXPOSE 3000
USER appuser
CMD ["npm", "run", "start"]