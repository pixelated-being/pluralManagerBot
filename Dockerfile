
# Use the official Node.js image from the Docker Hub
FROM node:18-slim

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (for installing dependencies)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the bot's code
COPY . .

# Run the bot (entry point is your index.js, change if necessary)
CMD ["node", "index.js"]
