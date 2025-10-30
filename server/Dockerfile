# 🏗️ Stage 1 — Build Stage
# Use the official Node.js image
FROM node:25-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./

# Install only production dependencies
RUN npm ci

# Copy the rest of the app
COPY . .

# Generate the Prisma client from your schema
# This step compiles Prisma's type-safe client into node_modules/@prisma/client
RUN npx prisma generate

# Compile TypeScript to JavaScript (output goes into /dist)
RUN npm run build

# 🚀 Stage 2 — Runtime Stage
# Start fresh with another small Node image
FROM node:25-alpine

# Set working directory again for the runtime container
WORKDIR /app

# Clean install of prod deps only
COPY package*.json ./
RUN npm ci --omit=dev

# Copy the compiled JavaScript + Prisma client from builder stage
COPY --from=builder /app/dist ./dist
# TODO: move this to dev only
COPY --from=builder /app/src ./src
# Copy only generated Prisma client from builder stage
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma
COPY --from=builder /app/prisma ./prisma

# Expose the port the app runs on
EXPOSE 3000

# Set environment variable for production
ENV NODE_ENV=production

# Start the application using the exec form (array) to handle signals correctly
CMD ["node", "dist/index.js"]
