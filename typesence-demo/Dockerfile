FROM node:18-alpine

RUN adduser -D appuser
 
WORKDIR /user/src/app
 
COPY . .
 
RUN npm ci
RUN npm run build
RUN npm prune --production
 
USER appuser
 
CMD ["npm", "run", "start:prod"]