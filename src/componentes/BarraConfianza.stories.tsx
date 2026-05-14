import type { Meta, StoryObj } from '@storybook/react';
import BarraConfianza from './BarraConfianza';

const meta = {
  title: 'Componentes/BarraConfianza',
  component: BarraConfianza,
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof BarraConfianza>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
