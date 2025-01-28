import { STORAGE_BUCKET_NAME } from '$env/static/private';
import type { SupabaseClient } from '@supabase/supabase-js';
import { supabase } from '../client';

class StorageApi {
  constructor(private readonly supabase: SupabaseClient) {
    this.supabase = supabase;
  }

  async fileExists(fileName: string) {
    if (!fileName) {
      throw new Error('File name is required');
    }

    const fileExists = await this.supabase
      .storage
      .from(STORAGE_BUCKET_NAME)
      .exists(fileName);

    return fileExists.data
  }

  async getPublicUrl(fileName: string) {
    if (!fileName) {
      throw new Error('File name is required');
    }

    const publicUrlResponse = await this.supabase
      .storage
      .from(STORAGE_BUCKET_NAME)
      .getPublicUrl(fileName);

    if (!publicUrlResponse.data) {
      return null;
    }

    return publicUrlResponse.data.publicUrl;
  }
}

export default new StorageApi(supabase);