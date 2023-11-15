# Use an official Node.js runtime as the base image with Node.js 20.5.1
FROM node:20.5.1

# Create a working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code to the container
COPY . .

# Expose the port on which Vite development server runs (default is 3000)
EXPOSE 3000

# Start the Vite development server
CMD ["npm", "run", "dev"]
