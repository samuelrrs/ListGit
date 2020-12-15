import { Card, Container} from "@material-ui/core";

export default function DetailsList(detailsItem) {

    return (

        <Container>
            <Card>
                {detailsItem}
            </Card>

        </Container>


    )

}