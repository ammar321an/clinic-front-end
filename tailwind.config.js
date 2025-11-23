/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js"
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			// NEW: Adding clinic brand colors for easy access
  			'clinic-blue': {
  				DEFAULT: '#0046c0',
  				50: '#e6f0ff',
  				100: '#cce0ff',
  				200: '#99c2ff',
  				300: '#66a3ff',
  				400: '#3385ff',
  				500: '#0046c0',
  				600: '#003899',
  				700: '#002a73',
  				800: '#001c4d',
  				900: '#000e26',
  			},
  		},
  		// NEW: Adding font sizes for consistency
  		fontSize: {
  			'2xs': '0.625rem',  // 10px
  			'xs': '0.75rem',     // 12px - base font
  			'sm': '0.875rem',    // 14px
  			'base': '1rem',      // 16px
  			'lg': '1.125rem',    // 18px
  			'xl': '1.25rem',     // 20px
  			'2xl': '1.5rem',     // 24px
  			'3xl': '1.875rem',   // 30px
  			'4xl': '2.25rem',    // 36px
  			'5xl': '3rem',       // 48px
  		},
  	}
  },
  plugins: [
    require("flowbite/plugin"),
    require("tailwindcss-animate")
  ],
}