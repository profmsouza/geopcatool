-- Create the survey_responses table
CREATE TABLE IF NOT EXISTS survey_responses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  user_id UUID REFERENCES auth.users(id), -- Added user_id to track who collected the data
  
  -- Inventory Data
  registration_number TEXT,
  birth_date DATE,
  age INTEGER,
  education_level TEXT,
  monthly_income TEXT,
  cep TEXT,
  street TEXT,
  neighborhood TEXT,
  city TEXT,
  state TEXT,
  distance_to_ubs TEXT,
  transport_mode TEXT,
  service_type TEXT,
  target_group TEXT,
  version TEXT,
  
  -- Questionnaire Data
  answers JSONB NOT NULL, -- Changed to JSONB to handle mixed types (number/string)
  question_codes TEXT[] NOT NULL,
  score NUMERIC(4,2) NOT NULL,
  is_high_quality BOOLEAN NOT NULL,
  components JSONB, -- Store component scores
  
  -- Location Data
  latitude DOUBLE PRECISION,
  longitude DOUBLE PRECISION
);

-- Enable Row Level Security (RLS)
ALTER TABLE survey_responses ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows authenticated users to insert
CREATE POLICY "Allow authenticated insert" ON survey_responses
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Create a policy that allows authenticated users to read all responses (for the dashboard)
CREATE POLICY "Allow authenticated read" ON survey_responses
  FOR SELECT USING (auth.role() = 'authenticated');

-- Create user_settings table for API keys
CREATE TABLE IF NOT EXISTS user_settings (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  gemini_api_key TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS for user_settings
ALTER TABLE user_settings ENABLE ROW LEVEL SECURITY;

-- Policies for user_settings
CREATE POLICY "Users can view their own settings" 
  ON user_settings FOR SELECT 
  USING (auth.uid() = id);

CREATE POLICY "Users can insert their own settings" 
  ON user_settings FOR INSERT 
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own settings" 
  ON user_settings FOR UPDATE 
  USING (auth.uid() = id);
