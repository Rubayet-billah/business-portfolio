import { ImageResponse } from 'next/og';
import { colors } from '@agency/config/colors';
import { siteConfig } from '@/config/site';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = siteConfig.name;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background: `linear-gradient(135deg, ${colors.light.brandNavy} 0%, ${colors.light.primary} 100%)`,
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 34, fontWeight: 700 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              background: 'white',
              color: colors.light.primary,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 30,
            }}
          >
            A
          </div>
          Agency
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ fontSize: 60, fontWeight: 700, lineHeight: 1.1, maxWidth: 900 }}>
            {siteConfig.defaultTitle}
          </div>
          <div style={{ fontSize: 28, opacity: 0.85 }}>Marketing that delivers.</div>
        </div>
      </div>
    ),
    size
  );
}
