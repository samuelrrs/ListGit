import { Card, Container, List } from "@material-ui/core";
import GridList from '@material-ui/core/GridList';
import { Typography } from '@material-ui/core/Typography';
import useStyles from './styles';

export default function DetailsList(detailsItem) {

    const styles = useStyles()
    return (

        <Container>
            <Card className={styles.gridList}>
                {detailsItem}
            </Card>

        </Container>


    )

}