# Use an official Node.js image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock first (for better caching)
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application files
COPY . .

# Expose the port React runs on (default is 3000)
EXPOSE 3000

# Start the React app
CMD ["yarn", "start"]
