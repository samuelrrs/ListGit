import { Card, Container, List } from "@material-ui/core";
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