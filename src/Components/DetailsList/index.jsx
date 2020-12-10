import { Container, List } from "@material-ui/core";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Typography } from '@material-ui/core/Typography';

export default function DetailsList(detailsItem) {

    return (


        <Container>
            <List dense={true}>
                {detailsItem}
            </List>

        </Container>


    )

}