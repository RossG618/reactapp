<Carousel activeIndex={index} onSelect={handleSelect} className='shadow border '>
{aboutData.map(data => (
     <Carousel.Item>
        <div className='d-flex justify-content-between'>
        <img
className="d-block w-50"
src={data.image}
alt="First slide"
/>
<Carousel.Caption className='bg-info rounded '>
<h3>{data.title}</h3>
<p>{data.para}</p>
</Carousel.Caption> 

<img
className="d-block w-50"
src={data.image}
alt="First slide"
/>
        </div>

</Carousel.Item>
))}


</Carousel>