# AL-WUSLA Backend Server

## ✅ Backend Setup Complete!

### What's Been Created:
- **Server**: Express.js with Socket.IO for real-time features
- **Database Models**: User, QuranProgress, Group
- **API Routes**: 6 complete endpoints (auth, quran, competition, prayer, health, groups)
- **Authentication**: JWT tokens with bcrypt password hashing
- **Real Prayer Times**: Using Adhan.js library
- **Real-Time Chat**: Socket.IO for live messaging
- **Hasanat System**: 10x and 700x multipliers working

---

## 🚀 How to Run Backend

### Step 1: Install MongoDB (Required)

#### Option A: MongoDB Community Server (Recommended)
1. Download from: https://www.mongodb.com/try/download/community
2. Install and run MongoDB service
3. Default connection: `mongodb://localhost:27017`

#### Option B: MongoDB Atlas (Cloud - Free)
1. Go to: https://www.mongodb.com/cloud/atlas/register
2. Create free cluster
3. Get connection string
4. Update `.env` file with connection string

### Step 2: Start Backend Server

```bash
cd backend
npm run dev
```

Server will start on: **http://localhost:5000**

### Step 3: Test API

Open browser or Postman:
- GET http://localhost:5000/api/test
- Should return: `{"message":"🌙 AL-WUSLA API is running!"}`

---

## 📡 API Endpoints Ready

### Authentication
- POST `/api/auth/register` - Create account
- POST `/api/auth/login` - Login
- GET `/api/auth/me` - Get current user

### Quran
- GET `/api/quran/progress` - Get user progress
- POST `/api/quran/complete-page` - Complete page (awards Hasanat)
- GET `/api/quran/leaderboard` - Top users by pages

### Competition
- GET `/api/competition/leaderboard` - Global leaderboard
- POST `/api/competition/boost` - Send boost to friend
- GET `/api/competition/challenges` - List challenges
- POST `/api/competition/join-challenge` - Join challenge

### Prayer Times
- GET `/api/prayer/times?lat=X&lng=Y` - Get prayer times
- POST `/api/prayer/check-in` - Check in at mosque

### Health
- POST `/api/health/hydration` - Log water intake
- POST `/api/health/qailulah` - Log nap
- GET `/api/health/stats` - Get stats

### Groups
- GET `/api/groups` - Get user's groups
- POST `/api/groups/join` - Join group
- GET `/api/groups/:id/messages` - Get messages
- POST `/api/groups/seed` - Create default groups

---

## 🔌 Socket.IO Events

### Client → Server:
- `join_group` - Join a group room
- `send_message` - Send chat message
- `hasanat_earned` - Notify of Hasanat earned

### Server → Client:
- `new_message` - New chat message received
- `leaderboard_update` - Leaderboard changed

---

## 🗄️ Database Collections

- **users**: User accounts and progress
- **quranprogresses**: Quran reading progress
- **groups**: Chat groups and messages

---

## Next Steps

1. ✅ Backend is ready!
2. ⏳ Need to update frontend to use these APIs
3. ⏳ Need to add Login/Register pages
4. ⏳ Need to integrate Socket.IO in React

---

## Testing Without Frontend

Use Postman or curl:

```bash
# Register
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"test","email":"test@test.com","password":"123456"}'

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.com","password":"123456"}'

# Get Leaderboard (use token from login)
curl -X GET http://localhost:5000/api/competition/leaderboard \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

---

**Status:** ✅ Backend READY - Waiting for MongoDB installation
