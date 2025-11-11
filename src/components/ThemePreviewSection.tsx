import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Palette, Eye, Monitor, Sun, Moon } from 'lucide-react';

interface ThemePreviewProps {
  theme: string;
  title: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
  };
}

const ThemePreviewCard: React.FC<ThemePreviewProps> = ({ theme, title, description, colors }) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{title}</CardTitle>
          <Badge variant="secondary" className="text-xs">
            {theme}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Color Palette Preview */}
        <div className="grid grid-cols-3 gap-2">
          <div
            className="h-8 rounded-md border"
            style={{ backgroundColor: colors.primary }}
            title="Primary"
          />
          <div
            className="h-8 rounded-md border"
            style={{ backgroundColor: colors.secondary }}
            title="Secondary"
          />
          <div
            className="h-8 rounded-md border"
            style={{ backgroundColor: colors.accent }}
            title="Accent"
          />
        </div>

        {/* Mock UI Elements */}
        <div
          className="p-4 rounded-lg border"
          style={{ backgroundColor: colors.background, color: colors.foreground }}
        >
          <div className="space-y-2">
            <div
              className="h-3 rounded"
              style={{ backgroundColor: colors.primary, opacity: 0.8 }}
            />
            <div
              className="h-2 rounded"
              style={{ backgroundColor: colors.secondary, opacity: 0.6 }}
            />
            <div
              className="h-2 rounded"
              style={{ backgroundColor: colors.accent, opacity: 0.4 }}
            />
          </div>
        </div>

        {/* Sample Button */}
        <Button
          size="sm"
          className="w-full"
          style={{
            backgroundColor: colors.primary,
            color: colors.foreground,
            borderColor: colors.primary
          }}
        >
          Preview Theme
        </Button>
      </CardContent>
    </Card>
  );
};

const ThemePreviewSection: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<string>('light');

  const themes: ThemePreviewProps[] = [
    {
      theme: 'light',
      title: 'Light Theme',
      description: 'Clean and bright interface perfect for daytime use',
      colors: {
        primary: '#8b5cf6',
        secondary: '#06b6d4',
        accent: '#eab308',
        background: '#ffffff',
        foreground: '#0f172a'
      }
    },
    {
      theme: 'dark',
      title: 'Dark Theme',
      description: 'Easy on the eyes for low-light environments',
      colors: {
        primary: '#a855f7',
        secondary: '#0891b2',
        accent: '#ca8a04',
        background: '#0f172a',
        foreground: '#f8fafc'
      }
    },
    {
      theme: 'high-contrast',
      title: 'High Contrast',
      description: 'Maximum accessibility with stark color differences',
      colors: {
        primary: '#ffffff',
        secondary: '#cccccc',
        accent: '#ffffff',
        background: '#000000',
        foreground: '#ffffff'
      }
    },
    {
      theme: 'blue',
      title: 'Blue Theme',
      description: 'Cool and professional blue color scheme',
      colors: {
        primary: '#0066cc',
        secondary: '#4da6ff',
        accent: '#80ccff',
        background: '#f8fbff',
        foreground: '#1a365d'
      }
    },
    {
      theme: 'purple',
      title: 'Purple Theme',
      description: 'Creative and vibrant purple palette',
      colors: {
        primary: '#7c3aed',
        secondary: '#a78bfa',
        accent: '#c4b5fd',
        background: '#faf9ff',
        foreground: '#2d1b69'
      }
    }
  ];

  return (
    <section id="themes" className="section-container">
      <div className="text-center mb-12">
        <h2 className="section-title">Theme Gallery</h2>
        <p className="section-subtitle">
          Explore different visual themes and color schemes for the portfolio
        </p>
      </div>

      {/* Theme Selector */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {[
          { value: 'light', label: 'Light', icon: Sun },
          { value: 'dark', label: 'Dark', icon: Moon },
          { value: 'high-contrast', label: 'High Contrast', icon: Eye },
          { value: 'blue', label: 'Blue', icon: Palette },
          { value: 'purple', label: 'Purple', icon: Palette },
        ].map(({ value, label, icon: Icon }) => (
          <Button
            key={value}
            variant={selectedTheme === value ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedTheme(value)}
            className="flex items-center gap-2"
          >
            <Icon className="h-4 w-4" />
            {label}
          </Button>
        ))}
      </div>

      {/* Side-by-Side Comparison */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Monitor className="h-5 w-5" />
            Current Theme
          </h3>
          <ThemePreviewCard {...themes.find(t => t.theme === selectedTheme)!} />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Palette className="h-5 w-5" />
            Alternative Preview
          </h3>
          <ThemePreviewCard
            {...themes.find(t => t.theme !== selectedTheme && t.theme !== 'system')!}
          />
        </div>
      </div>

      {/* All Themes Grid */}
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
        {themes.map((themeData) => (
          <ThemePreviewCard key={themeData.theme} {...themeData} />
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <p className="text-muted-foreground mb-4">
          Use the theme selector in the navigation to switch between themes
        </p>
        <Button variant="outline" className="flex items-center gap-2 mx-auto">
          <Palette className="h-4 w-4" />
          Try All Themes
        </Button>
      </div>
    </section>
  );
};

export default ThemePreviewSection;
