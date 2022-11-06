import toothXcrayImg from "./assets/img/tooth-xray.png";
import toothImg from "./assets/img/tooth.png";
import {useEffect, useState, useRef} from 'react';
import axios from "axios";

const apiURL = process.env.REACT_APP_API_URL;

function App() {

    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedFileSize, setSelectedFileSize] = useState([]);
    const [xrayDetail, setXrayDetail] = useState([]);
    const [selectedImg, setSelectedImg] = useState(null);
    const [isChecked, setIsChecked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [toothCategories, setToothCategories] = useState([]);


    useEffect(() => {

        console.log("file-size: ", selectedFileSize)

    }, [selectedFileSize]);


    useEffect(() => {

        const xrayImg = document.querySelector('.xray-img');
        

        xrayDetail.map(e => {
            const elementLeft = e.xmin * 100 / selectedFileSize.width;
            const elementTop = e.ymin * 100 / selectedFileSize.height;
            const elementWidth = (e.xmax - e.xmin) * 100 / selectedFileSize.width;
            const elementHeight = (e.ymax - e.ymin) * 100 / selectedFileSize.height;
            const newElement = document.createElement("div");
            newElement.classList.add('teeth-bulgu');
            newElement.style.left = `${elementLeft}%`;
            newElement.style.top = `${elementTop}%`;
            newElement.style.width = `${elementWidth}%`;
            newElement.style.height = `${elementHeight}%`;

            xrayImg.appendChild(newElement)
            console.log("e : ", e)
        })

    }, [xrayDetail]);


    const categories =  (resData) => {
        return resData.reduce((acc, obj) => {           
            const key = obj['name'];         
            if (!acc[key]) {
               acc[key] = [];
            }
            acc[key].push(obj);
            return acc;
         }, {});
    }



    const handleSubmit = async (event) => {
        setIsLoading(true)
        event.preventDefault()
        const formData = new FormData();
        formData.append("file", selectedFile);
        try {
            await axios({
                method: "post",
                url: `${apiURL}`,
                data: formData,
                headers: {
                    "Content-Type": "multipart/form-data",
                    'Access-Control-Allow-Origin' : '*',
                    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                }
            }).then(response => {
                console.log("datalar", response.data.result)
                setXrayDetail(response.data.result)
                setIsChecked(true)
                setIsLoading(false)

                setToothCategories(categories(response.data.result))
               
            });
        } catch (error) {
            console.log(error)
        }
    }


    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0])
        setSelectedImg(URL.createObjectURL(event.target.files[0]));


        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);


        reader.onload = function (e) {
            var image = new Image();
            image.src = e.target.result;
            image.onload = function () {
                setSelectedFileSize({'width': this.width, 'height': this.height})
            };
        }

    }

    return (
        <div className="App">
            <div className="container-fluid">


                <form onSubmit={handleSubmit}>
                    <div className="input-group my-3">
                        <input type="file" className="form-control" id="inputGroupFile02"
                            onChange={handleFileSelect}/>
                        <button className="input-group-text" htmlFor="inputGroupFile02" type="submit">check</button>
                    </div>
                </form>

                {
                xrayDetail ?. length && (
                    <div className="analysis">

                        <div className="row">
                            <div className="col-12 col-lg-8">
                                <div className="analysis-section xray-img">
                                    <img src={selectedImg}
                                        alt=""/>
                                </div>
                                <div className="analysis-section teeth d-none">
                                    <div className="tooth">
                                        <img src={toothImg}
                                            alt=""/>
                                        <span>18</span>
                                    </div>
                                    <div className="tooth">
                                        <img src={toothImg}
                                            alt=""/>
                                        <span>17</span>
                                    </div>
                                    <div className="tooth">
                                        <img src={toothImg}
                                            alt=""/>
                                        <span>16</span>
                                    </div>
                                    <div className="tooth">
                                        <img src={toothImg}
                                            alt=""/>
                                        <span>15</span>
                                    </div>
                                    <div className="tooth">
                                        <img src={toothImg}
                                            alt=""/>
                                        <span>14</span>
                                    </div>
                                    <div className="tooth">
                                        <img src={toothImg}
                                            alt=""/>
                                        <span>13</span>
                                    </div>
                                    <div className="tooth">
                                        <img src={toothImg}
                                            alt=""/>
                                        <span>12</span>
                                    </div>
                                    <div className="tooth bg-success">
                                        <img src={toothImg}
                                            alt=""/>
                                        <span>11</span>
                                    </div>
                                    <div className="tooth">
                                        <img src={toothImg}
                                            alt=""/>
                                        <span>21</span>
                                    </div>
                                    <div className="tooth">
                                        <img src={toothImg}
                                            alt=""/>
                                        <span>22</span>
                                    </div>
                                    <div className="tooth">
                                        <img src={toothImg}
                                            alt=""/>
                                        <span>23</span>
                                    </div>
                                    <div className="tooth">
                                        <img src={toothImg}
                                            alt=""/>
                                        <span>24</span>
                                    </div>
                                    <div className="tooth bg-success">
                                        <img src={toothImg}
                                            alt=""/>
                                        <span>25</span>
                                    </div>
                                    <div className="tooth">
                                        <img src={toothImg}
                                            alt=""/>
                                        <span>26</span>
                                    </div>
                                    <div className="tooth">
                                        <img src={toothImg}
                                            alt=""/>
                                        <span>27</span>
                                    </div>
                                    <div className="tooth">
                                        <img src={toothImg}
                                            alt=""/>
                                        <span>28</span>
                                    </div>
                                    <div className="tooth">
                                        <img src={toothImg}
                                            alt=""/>
                                        <span>48</span>
                                    </div>
                                    <div className="tooth bg-danger">
                                        <img src={toothImg}
                                            alt=""/>
                                        <span>47</span>
                                    </div>
                                    <div className="tooth">
                                        <img src={toothImg}
                                            alt=""/>
                                        <span>46</span>
                                    </div>
                                    <div className="tooth">
                                        <img src={toothImg}
                                            alt=""/>
                                        <span>45</span>
                                    </div>
                                    <div className="tooth bg-danger">
                                        <img src={toothImg}
                                            alt=""/>
                                        <span>44</span>
                                    </div>
                                    <div className="tooth">
                                        <img src={toothImg}
                                            alt=""/>
                                        <span>43</span>
                                    </div>
                                    <div className="tooth">
                                        <img src={toothImg}
                                            alt=""/>
                                        <span>42</span>
                                    </div>
                                    <div className="tooth">
                                        <img src={toothImg}
                                            alt=""/>
                                        <span>41</span>
                                    </div>
                                    <div className="tooth">
                                        <img src={toothImg}
                                            alt=""/>
                                        <span>31</span>
                                    </div>
                                    <div className="tooth">
                                        <img src={toothImg}
                                            alt=""/>
                                        <span>32</span>
                                    </div>
                                    <div className="tooth">
                                        <img src={toothImg}
                                            alt=""/>
                                        <span>33</span>
                                    </div>
                                    <div className="tooth">
                                        <img src={toothImg}
                                            alt=""/>
                                        <span>34</span>
                                    </div>
                                    <div className="tooth">
                                        <img src={toothImg}
                                            alt=""/>
                                        <span>35</span>
                                    </div>
                                    <div className="tooth">
                                        <img src={toothImg}
                                            alt=""/>
                                        <span>36</span>
                                    </div>
                                    <div className="tooth">
                                        <img src={toothImg}
                                            alt=""/>
                                        <span>37</span>
                                    </div>
                                    <div className="tooth">
                                        <img src={toothImg}
                                            alt=""/>
                                        <span>38</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">

                                {
                                xrayDetail.map((e, index) => (

                                    <div className="analysis-section details"
                                        key={index}>
                                        <div className="tooth-numbers">
                                            <img src={toothImg}
                                                alt=""/>
                                            <span>38</span>
                                        </div>
                                        <div className="tooth-info">
                                            <img src={toothXcrayImg}
                                                alt=""/>
                                            <div className="tooth-info-details">
                                                <span className="text-info me-1">
                                                    {
                                                    e.name
                                                }</span>
                                                %{
                                                Math.trunc(e.confidence * 100)
                                            }<br/>
                                                +Bulgu ekle<br/>
                                                +Tedavi planı gör
                                            </div>
                                        </div>
                                    </div>

                                ))
                            }

                                <div className="analysis-section counter">
                                
                                    {
                                     toothCategories &&
                                     Object.entries(toothCategories).map((e, index) => (
                                        <div className="counter-btn kist">
                                        <div>{e[0]}</div>
                                        <div>{e[1].length}</div>
                                    </div>
                                     ))
                                    }
                                   
                                </div>

                            </div>
                        </div>
                    </div>
                )
            }


                {
                (xrayDetail.length == 0 && selectedImg && isChecked) && (
                    <div className="alert alert-danger">Mükemmel hiçbirşey yok :)</div>
                )
            }

                {
                isLoading && (
                    <div className="alert alert-success">geliyorrrr</div>
                )
            } </div>

        </div>
    );
}

export default App;
