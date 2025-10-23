# Use the official Node.js image
FROM node:25-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy the rest of the app
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["node", "index.ts"]
