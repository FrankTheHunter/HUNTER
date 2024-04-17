FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --include=dev

COPY --chown=node:node . .

RUN npm run build

EXPOSE 5173 

ENV HOST=0.0.0.0 PORT=5173

CMD ["npm", "run", "dev", "--", "--host"]