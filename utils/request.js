import { createClient } from '@supabase/supabase-js';

// Configura tu cliente de Supabase
const supabase = createClient('supabaseUrl', 'supabaseKey');

async function fetchTableData() {
  const { data, error } = await supabase.from('nombre_de_la_tabla').select('*');
  if (error) {
    console.error(error);
    return null;
  }
  return data;
}