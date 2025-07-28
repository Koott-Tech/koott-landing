import { supabase } from './supabase'

const BUCKET_NAME = 'assets'

export const getVideoUrl = async (fileName) => {
  try {
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .createSignedUrl(fileName, 3600) // 1 hour expiry
    
    if (error) {
      console.error('Error getting video URL:', error)
      return null
    }
    
    return data.signedUrl
  } catch (error) {
    console.error('Error getting video URL:', error)
    return null
  }
}

export const getPublicVideoUrl = (fileName) => {
  try {
    if (!supabase) {
      // Fallback to local videos if Supabase isn't configured
      return `/${fileName}`
    }
    
    const { data } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(fileName)
    
    return data.publicUrl
  } catch (error) {
    console.error('Error getting public video URL:', error)
    // Fallback to local videos
    return `/${fileName}`
  }
}

// Pre-defined video list with Supabase file names
export const videoFiles = [
  'bubbles.mp4',
  'girl.mp4'
] 