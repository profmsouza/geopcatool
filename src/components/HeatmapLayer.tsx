import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet.heat';

interface HeatmapLayerProps {
  points: [number, number, number][]; // [lat, lng, intensity]
}

export function HeatmapLayer({ points }: HeatmapLayerProps) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    // @ts-ignore
    const heatLayer = L.heatLayer(points, {
      radius: 35,
      blur: 25,
      maxZoom: 17,
      gradient: {
        0.2: '#10b981', // emerald-500 (Adequate)
        0.5: '#eab308', // yellow-500 (Intermediate)
        0.8: '#ef4444', // red-500 (Vulnerable)
        1.0: '#b91c1c'  // red-700 (Very Vulnerable)
      }
    }).addTo(map);

    return () => {
      map.removeLayer(heatLayer);
    };
  }, [map, points]);

  return null;
}
