# 🚀 Deployment Guide - NextTechFusionGadgets Career Website

## 🌐 Deployment Options

### 1. Vercel (Recommended - Easy & Free)

Vercel is the easiest way to deploy Next.js applications:

#### Steps:
1. **Go to [Vercel.com](https://vercel.com)**
2. **Sign up/Login** with your GitHub account
3. **Import Project**:
   - Click "New Project"
   - Select your GitHub repository: `ntfg-career-website`
   - Click "Import"
4. **Configure Environment Variables**:
   ```env
   MONGODB_URI=your-mongodb-atlas-connection-string
   JWT_SECRET=your-secure-jwt-secret
   NEXTAUTH_SECRET=your-nextauth-secret
   NEXTAUTH_URL=https://your-app-name.vercel.app
   ```
5. **Deploy**: Click "Deploy"

#### Result:
- ✅ Automatic deployments on every push
- ✅ Custom domain support
- ✅ SSL certificates included
- ✅ Global CDN

---

### 2. Netlify

#### Steps:
1. **Go to [Netlify.com](https://netlify.com)**
2. **Connect GitHub repository**
3. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. **Environment Variables**: Add the same variables as Vercel
5. **Deploy**

---

### 3. Railway

#### Steps:
1. **Go to [Railway.app](https://railway.app)**
2. **Deploy from GitHub**
3. **Add Environment Variables**
4. **Deploy**

---

## 🗄️ Database Setup for Production

### MongoDB Atlas (Recommended)

1. **Create MongoDB Atlas Account**:
   - Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Sign up for free account

2. **Create Cluster**:
   - Choose M0 Sandbox (Free)
   - Select region closest to your users

3. **Create Database User**:
   - Username: `ntfg-admin`
   - Password: Generate secure password
   - Permissions: Read and write to any database

4. **Network Access**:
   - Add IP Address: `0.0.0.0/0` (Allow from anywhere)
   - Or add specific IPs for better security

5. **Get Connection String**:
   ```
   mongodb+srv://ntfg-admin:<password>@cluster0.xxxxx.mongodb.net/ntfg-careers?retryWrites=true&w=majority
   ```

6. **Seed Production Database**:
   ```bash
   # Update .env.local with Atlas connection string
   npm run seed
   ```

---

## 🔧 Environment Variables for Production

Create these environment variables in your deployment platform:

```env
# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ntfg-careers

# Authentication
JWT_SECRET=super-secure-jwt-secret-at-least-32-characters-long
NEXTAUTH_SECRET=another-super-secure-secret-for-nextauth
NEXTAUTH_URL=https://your-domain.com

# Optional: Email configuration (for future features)
EMAIL_SERVER_HOST=smtp.gmail.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=your-email@gmail.com
EMAIL_SERVER_PASSWORD=your-app-password
EMAIL_FROM=noreply@your-domain.com
```

---

## 🔒 Security Checklist

### Before Going Live:

- ✅ **Strong Secrets**: Use long, random strings for JWT_SECRET and NEXTAUTH_SECRET
- ✅ **Database Security**: Restrict MongoDB Atlas IP access
- ✅ **Environment Variables**: Never commit .env files
- ✅ **HTTPS**: Ensure SSL certificates are active
- ✅ **CORS**: Configure proper CORS settings
- ✅ **Rate Limiting**: Consider adding rate limiting to API routes

### Generate Secure Secrets:
```bash
# Generate JWT_SECRET (32+ characters)
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Generate NEXTAUTH_SECRET (32+ characters)  
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

---

## 🚀 Quick Deploy Commands

### For Vercel CLI:
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables
vercel env add MONGODB_URI
vercel env add JWT_SECRET
vercel env add NEXTAUTH_SECRET
vercel env add NEXTAUTH_URL
```

### For Railway CLI:
```bash
# Install Railway CLI
npm i -g @railway/cli

# Login and deploy
railway login
railway link
railway up
```

---

## 📊 Post-Deployment Checklist

After deployment, verify:

- ✅ **Homepage loads** correctly
- ✅ **Job listings** display properly
- ✅ **Search and filtering** works
- ✅ **User registration** functions
- ✅ **Login system** works
- ✅ **Job applications** can be submitted
- ✅ **Database connection** is stable
- ✅ **API endpoints** respond correctly
- ✅ **Mobile responsiveness** works
- ✅ **Performance** is acceptable

---

## 🔍 Monitoring & Analytics

### Add Analytics (Optional):
1. **Google Analytics**: Add tracking code
2. **Vercel Analytics**: Enable in Vercel dashboard
3. **Error Tracking**: Consider Sentry for error monitoring

### Performance Monitoring:
- Use Lighthouse for performance audits
- Monitor Core Web Vitals
- Check loading times across different devices

---

## 🆘 Troubleshooting

### Common Deployment Issues:

**Build Errors:**
- Check Node.js version compatibility
- Verify all dependencies are in package.json
- Review TypeScript errors

**Database Connection:**
- Verify MongoDB Atlas connection string
- Check network access settings
- Ensure database user has correct permissions

**Environment Variables:**
- Confirm all required variables are set
- Check for typos in variable names
- Verify secrets are properly generated

**Authentication Issues:**
- Update NEXTAUTH_URL to production domain
- Verify JWT_SECRET is set correctly
- Check CORS settings

---

## 🎯 Domain Setup (Optional)

### Custom Domain:
1. **Purchase domain** from registrar (GoDaddy, Namecheap, etc.)
2. **Configure DNS** to point to your deployment platform
3. **Update NEXTAUTH_URL** to your custom domain
4. **Enable SSL** certificate

### Example DNS Settings for Vercel:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.19.61
```

---

## 🎉 Your Career Website is Live!

Once deployed, your NextTechFusionGadgets career website will be accessible worldwide with:

- ✅ **Professional job listings**
- ✅ **User authentication system**
- ✅ **Job application functionality**
- ✅ **Responsive design**
- ✅ **Search and filtering**
- ✅ **Admin capabilities**

**Example URLs:**
- Production: `https://ntfg-careers.vercel.app`
- Custom domain: `https://careers.nexttechfusion.com`

---

*Need help with deployment? Create an issue in the GitHub repository!*