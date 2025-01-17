import { withStyles } from '@material-ui/core/styles';
import Tooltip, { TooltipProps as TooltipLightProps } from '@material-ui/core/Tooltip';

const StyledTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.resourceToolTip.color,
    boxShadow: theme.shadows[1],
    fontSize: '1rem',
    whiteSpace: 'pre-line',
  },
}))(Tooltip);

export default function TooltipLight(props: TooltipLightProps) {
  const { children, ...rest } = props;
  if (typeof children === 'string') {
    return (
      <StyledTooltip {...rest}>
        <span>{children}</span>
      </StyledTooltip>
    );
  }

  return <StyledTooltip {...props} />;
}

export type { TooltipLightProps };
