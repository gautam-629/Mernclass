# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Expose port 3000 for the development server
EXPOSE 3000

# Start the development server
CMD ["npm", "run", "dev"]
