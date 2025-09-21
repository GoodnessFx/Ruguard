# Ruguard - Token Security Platform

A real-time rugpull detection and security grading platform for token launches built with React, TypeScript, TailwindCSS, and Supabase.

## Features

- 🔍 **Real-time Token Analysis** - A-F security grading system
- 🛡️ **Community Reporting** - Stake ISH tokens to report suspicious activities
- 🏆 **Reputation Protocol** - Decentralized community-driven verification
- 🤖 **ML Detection** - Machine learning-powered pattern recognition
- 📱 **PWA Support** - Mobile-first progressive web application
- 🌐 **Multi-chain** - Support for Ethereum, BSC, Polygon, and Arbitrum

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: TailwindCSS v4, Glassmorphism design
- **Animation**: Framer Motion (motion/react)
- **Backend**: Supabase (Database, Auth, Storage, Edge Functions)
- **UI Components**: Radix UI, shadcn/ui
- **Web3**: Ethers.js, Wagmi, RainbowKit
- **Charts**: Recharts
- **Real-time**: Socket.IO

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ruguard.git
   cd ruguard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   VITE_WEB3_PROJECT_ID=your_walletconnect_project_id
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## Project Structure

```
ruguard/
├── components/           # React components
│   ├── ui/              # shadcn/ui components
│   └── figma/           # Figma import utilities
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions and constants
├── types/               # TypeScript type definitions
├── utils/               # API clients and helpers
├── supabase/            # Supabase configuration and functions
├── styles/              # Global styles and TailwindCSS
└── public/              # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Key Components

### Authentication
- Email/password signup and login
- Web3 wallet connection support
- Social login (Google, GitHub) - requires Supabase configuration

### Token Analysis
- Real-time security scoring
- ML-powered risk assessment
- Community-driven reports
- Multi-chain token support

### Community Features
- Staking mechanism for reports
- Reputation scoring system
- Dispute resolution
- Leaderboards and rewards

## Environment Variables

Required environment variables for full functionality:

```env
# Supabase
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=

# Web3 (optional)
VITE_WEB3_PROJECT_ID=

# API Keys (server-side)
ETHERSCAN_API_KEY=
BSCSCAN_API_KEY=
POLYGONSCAN_API_KEY=
```

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting platform
3. Configure environment variables on your platform

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email hello@ruguard.app or join our [Discord community](https://discord.gg/ruguard).

## Roadmap

- [ ] Advanced ML models for detection
- [ ] Mobile app (React Native)
- [ ] Additional blockchain networks
- [ ] API marketplace
- [ ] White-label solutions
- [ ] DAO governance implementation