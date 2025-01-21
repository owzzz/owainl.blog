import { PUBLIC_STORAGE_BUCKET_NAME } from '$env/static/public';

if (!PUBLIC_STORAGE_BUCKET_NAME) {
  throw new Error('PUBLIC_STORAGE_BUCKET_NAME environment variable is not set');
}

export { PUBLIC_STORAGE_BUCKET_NAME }; 