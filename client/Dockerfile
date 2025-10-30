# Stage 1: Build
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and lock file
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the app
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine

# Copy built files from previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config if needed (optional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]