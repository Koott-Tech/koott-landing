# Supabase Setup for Video Hosting

## 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Note down your project URL and anon key

## 2. Environment Variables

Create a `.env.local` file in your project root with:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 3. Create Storage Bucket

1. Go to your Supabase dashboard
2. Navigate to Storage
3. Create a new bucket called `videos`
4. Set the bucket to public (for video streaming)

## 4. Upload Videos

1. In the `videos` bucket, upload your video files:
   - `bubbles.mp4`
   - `girl.mp4`
   - `car.mp4`

## 5. Bucket Policies

Make sure your bucket has the following policy for public access:

```sql
CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING (bucket_id = 'videos');
```

## 6. Test the Setup

Run your development server and check if videos load from Supabase Storage.

## Benefits of Supabase Storage

- ✅ **CDN**: Global content delivery network
- ✅ **Scalability**: Handles large video files efficiently
- ✅ **Cost-effective**: Pay only for what you use
- ✅ **Reliability**: 99.9% uptime SLA
- ✅ **Security**: Built-in authentication and authorization 