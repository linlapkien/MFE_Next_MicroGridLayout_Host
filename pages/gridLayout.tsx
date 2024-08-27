import { Grid, GridItem } from '@chakra-ui/react';

interface GridLayoutProps {
  settings: { component: string; col: string; row: string }[];
  components: { [key: string]: JSX.Element };
}

const GridLayout: React.FC<GridLayoutProps> = ({ settings, components }) => {
  console.log(settings);
  console.log(components);
  return (
    <div>
      <Grid templateColumns="repeat(12, 1fr)" gap={4}>
        {settings.map((comp, index) => {
          const [startCol, colSpan] = comp.col.split(' / span ').map(Number);
          const [startRow, rowSpan] = comp.row.split(' / span ').map(Number);
          return (
            <GridItem
              key={index}
              colStart={startCol}
              colSpan={colSpan}
              rowStart={startRow}
              rowSpan={rowSpan}
              display="flex"
              alignItems="stretch" // Stretch items to fill their grid area
              justifyContent="center" // Center content horizontally
              overflow="hidden" // Avoid overflow
            >
              <div style={{ width: '100%', height: '100%' }}>
                {components[comp.component]}
              </div>
            </GridItem>
          );
        })}
      </Grid>
    </div>
  );
};

export default GridLayout;
