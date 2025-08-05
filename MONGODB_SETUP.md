# MongoDB Setup Guide

## Option 1: MongoDB Atlas (Cloud - Recommended)

### Step 1: Create MongoDB Atlas Account
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Click "Try Free" and create an account
3. Verify your email address

### Step 2: Create a Cluster
1. After logging in, click "Build a Database"
2. Choose "M0 Sandbox" (Free tier)
3. Select a cloud provider and region (choose closest to you)
4. Name your cluster (e.g., "ntfg-careers")
5. Click "Create"

### Step 3: Create Database User
1. Go to "Database Access" in the left sidebar
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Username: `ntfg-admin`
5. Password: Generate a secure password (save it!)
6. Database User Privileges: "Read and write to any database"
7. Click "Add User"

### Step 4: Configure Network Access
1. Go to "Network Access" in the left sidebar
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (for development)
4. Click "Confirm"

### Step 5: Get Connection String
1. Go to "Database" in the left sidebar
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Select "Node.js" and version "4.1 or later"
5. Copy the connection string
6. Replace `<password>` with your database user password

### Step 6: Update Environment Variables
Create `.env.local` file with your connection string:
```env
MONGODB_URI=mongodb+srv://ntfg-admin:<password>@ntfg-careers.xxxxx.mongodb.net/ntfg-careers?retryWrites=true&w=majority
JWT_SECRET=your-super-secret-jwt-key-here-make-it-long-and-random
NEXTAUTH_SECRET=your-nextauth-secret-key-here
NEXTAUTH_URL=http://localhost:3000
```

---

## Option 2: Local MongoDB Installation

### Step 1: Download MongoDB Community Server
1. Go to [MongoDB Download Center](https://www.mongodb.com/try/download/community)
2. Select:
   - Version: 7.0.x (latest)
   - Platform: Windows
   - Package: MSI
3. Click "Download"

### Step 2: Install MongoDB
1. Run the downloaded `.msi` file
2. Choose "Complete" installation
3. Check "Install MongoDB as a Service"
4. Check "Install MongoDB Compass" (GUI tool)
5. Complete the installation

### Step 3: Verify Installation
1. Open Command Prompt as Administrator
2. Run: `mongod --version`
3. You should see MongoDB version information

### Step 4: Start MongoDB Service
1. Open Services (Win + R, type `services.msc`)
2. Find "MongoDB" service
3. Right-click and select "Start" (if not already running)

### Step 5: Test Connection
1. Open Command Prompt
2. Run: `mongosh`
3. You should see MongoDB shell prompt

### Step 6: Create Environment Variables
Create `.env.local` file:
```env
MONGODB_URI=mongodb://localhost:27017/ntfg-careers
JWT_SECRET=your-super-secret-jwt-key-here-make-it-long-and-random
NEXTAUTH_SECRET=your-nextauth-secret-key-here
NEXTAUTH_URL=http://localhost:3000
```

---

## Next Steps (For Both Options)

### 1. Install Dependencies (if not done)
```bash
npm install
```

### 2. Seed the Database
```bash
npm run seed
```

### 3. Start the Application
```bash
npm run dev
```

### 4. Test the Connection
- Open http://localhost:3000
- Go to the Jobs page
- You should see job listings

---

## Troubleshooting

### Common Issues:

**Connection Error:**
- Check your internet connection (for Atlas)
- Verify MongoDB service is running (for local)
- Check firewall settings

**Authentication Error:**
- Verify username/password in connection string
- Check database user permissions

**Network Error (Atlas):**
- Verify IP address is whitelisted
- Check network access settings

**Local MongoDB Won't Start:**
- Run Command Prompt as Administrator
- Try: `net start MongoDB`
- Check Windows Services

### Getting Help:
- Check MongoDB logs in Event Viewer (Windows)
- Use MongoDB Compass to test connections
- Verify environment variables are loaded correctly

---

## MongoDB Compass (GUI Tool)

If you installed MongoDB Compass:
1. Open MongoDB Compass
2. Use connection string from `.env.local`
3. Connect to view your database
4. You can browse collections and documents visually

---

## Security Notes

**For Production:**
- Use strong passwords
- Restrict IP access
- Enable authentication
- Use SSL/TLS connections
- Regular backups

**For Development:**
- Keep `.env.local` in `.gitignore`
- Don't commit sensitive data
- Use different databases for dev/prod