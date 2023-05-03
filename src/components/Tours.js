import Card  from './card'

function Tours({tours , removeTour} ){

   

    return (
        <div className='Tours'>
            {
            tours.map( function mapFun(tour){
                return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
            })
    }
        </div>
    )

}

export  default Tours;