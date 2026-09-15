#!/bin/bash
# YABARIGHT Project - Setup Script
# Run this to quickly setup your development environment

echo "🚀 YABARIGHT Setup Script"
echo "================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

echo "✅ Node.js $(node -v) found"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed"
    exit 1
fi

echo "✅ npm $(npm -v) found"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed"

# Check if .env.local exists
echo ""
echo "🔧 Environment setup..."
if [ ! -f .env.local ]; then
    echo "Creating .env.local from template..."
    cp .env.example .env.local
    echo "⚠️  Please edit .env.local with your configuration"
else
    echo "✅ .env.local already exists"
fi

# Check if PostgreSQL is available
echo ""
echo "🗄️  Checking database setup..."
if ! command -v psql &> /dev/null; then
    echo "⚠️  PostgreSQL is not installed on this system"
    echo "   Please install PostgreSQL and create database 'yabaright'"
else
    echo "✅ PostgreSQL found"
    echo "   Make sure database 'yabaright' exists and DATABASE_URL is set in .env.local"
fi

# Run Prisma generate (doesn't require DB connection)
echo ""
echo "🔄 Generating Prisma client..."
npx prisma generate

echo ""
echo "================================"
echo "✅ Setup Complete!"
echo ""
echo "Next steps:"
echo "1. Configure your .env.local file"
echo "2. Create your PostgreSQL database: createdb yabaright"
echo "3. Run Prisma migrations: npx prisma migrate dev --name init"
echo "4. Start the dev server: npm run dev"
echo ""
echo "For more details, see:"
echo "- QUICKSTART.md"
echo "- IMPLEMENTATION_GUIDE.md"
echo ""
echo "Happy coding! 🚀"
