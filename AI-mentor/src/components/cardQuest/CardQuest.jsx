import Card from 'react-bootstrap/Card';
const CardQuest = ({titulo, contenido}) => {
    return (
        <>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{titulo}</Card.Title>
                    <Card.Text>{contenido}</Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>

        </>
    );
};

export default CardQuest;