import type { Meta, StoryObj } from '@storybook/react';
import BarraNavegacion from './BarraNavegacion';

const meta = {
  title: 'Componentes/BarraNavegacion',
  component: BarraNavegacion,
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof BarraNavegacion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
