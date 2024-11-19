# 빌드 단계
FROM node:18-alpine AS builder
WORKDIR /app

# 종속성 설치
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# 소스 복사 및 빌드
COPY . .
RUN yarn build

# 런타임 단계
FROM node:18-alpine
WORKDIR /app

# 빌드 결과 및 public 폴더 복사
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json /app/yarn.lock ./

# 프로덕션 종속성 설치
RUN yarn install --production --frozen-lockfile

# 포트 설정
EXPOSE 4000

# 실행 명령
CMD ["yarn", "start"]
