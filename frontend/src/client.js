import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'w7w7umz3',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skjq6Cjolq5BHxOpvfA4xfMe2nc47aysr0WysjEuxM7kec0BgCUPVCVNaf3Z3PJBOYSdVuiQIuOLyVWER96lGdiH05JrBGyvHq9PsXWMB6DFrjzbdO3YFQUhcWSLgKR4nLF2lDJia4As7pQgBaAunLShxKSrFdJmTZRAKz94l0D4XuM4ouoH',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);