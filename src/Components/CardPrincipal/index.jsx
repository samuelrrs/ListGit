import React from 'react'
import Card from '@material-ui/core/Card';
import useStyles from './styles';
export default function CardPrincipal({ contentCard }) {

    const styles = useStyles()

    return (

        <>
            <Card className={styles.principal}>
                {contentCard}
            </Card>

        </>
    )


}