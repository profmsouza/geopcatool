import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const STORAGE_KEY = 'geopcatool_offline_responses';

export function useOfflineSync() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [pendingSyncCount, setPendingSyncCount] = useState(0);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      syncOfflineData();
    };
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Initial check
    updatePendingCount();
    if (navigator.onLine) {
      syncOfflineData();
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const updatePendingCount = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setPendingSyncCount(parsed.length);
      } catch (e) {
        setPendingSyncCount(0);
      }
    } else {
      setPendingSyncCount(0);
    }
  };

  const saveOfflineResponse = (data: any) => {
    const stored = localStorage.getItem(STORAGE_KEY);
    let responses = [];
    if (stored) {
      try {
        responses = JSON.parse(stored);
      } catch (e) {
        responses = [];
      }
    }
    responses.push({ ...data, _offlineTimestamp: new Date().toISOString() });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(responses));
    updatePendingCount();
  };

  const syncOfflineData = async () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return;

    let responses = [];
    try {
      responses = JSON.parse(stored);
    } catch (e) {
      return;
    }
    
    if (responses.length === 0) return;

    try {
      // Remove the internal timestamp before inserting
      const dataToInsert = responses.map((r: any) => {
        const { _offlineTimestamp, ...rest } = r;
        return rest;
      });

      const { error } = await supabase.from('survey_responses').insert(dataToInsert);
      
      if (!error) {
        localStorage.removeItem(STORAGE_KEY);
        updatePendingCount();
        console.log('Offline data synced successfully!');
      } else {
        console.error('Error syncing offline data:', error);
      }
    } catch (err) {
      console.error('Failed to sync offline data:', err);
    }
  };

  return { isOnline, pendingSyncCount, saveOfflineResponse, syncOfflineData };
}
