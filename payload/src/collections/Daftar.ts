import { CollectionConfig } from 'payload/types';

const Daftar: CollectionConfig = {
  slug: 'Daftar',
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'nama',
      label: 'Nama',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      label: 'Email',
      type: 'text',
      required: true,
    },
    {
      name: 'asalSekolah',
      label: 'Asal Sekolah',
      type: 'text',
    },
    {
      name: 'status',
      label: 'Status',
      type: 'select',
      options: [
        { label: 'Waiting', value: 'waiting' },
        { label: 'Rejected', value: 'rejected' },
        { label: 'Accepted', value: 'accepted'},
      ],
      defaultValue: 'waiting',
    },
    {
      name: 'tanggal_pendaftaran',
      label: 'Tanggal Pendaftaran',
      type: 'date',
      required: true,
      defaultValue: () => new Date().toISOString().split('T')[0],
    },
  ],
};

export default Daftar;
