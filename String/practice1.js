const item = `
    <item>
        <title>
            Khách sạn suối nước nóng bằng gỗ cổ nhất Nhật Bản
        </title>
        <description>
            <![CDATA[ 
                <a href="https://vnexpress.net/khach-san-suoi-nuoc-nong-bang-go-co-nhat-nhat-ban-4205983.html">
                    <img src="https://i1-dulich.vnecdn.net/2020/12/14/1-1607918993-1607930512.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=rifUY9GGsKVoRlHIlL1oNQ" >
                </a>
                </br>Sekizenkan là nơi cho khách nghỉ dưỡng và tắm suối nước nóng trị bệnh từ năm 1691, cũng là nguồn cảm hứng tạo nên nhà tắm trong Spirited Away. 
            ]]>
        </description>
        <pubDate>
            Sat, 19 Dec 2020 02:08:00 +0700
        </pubDate>
        <link>
            https://vnexpress.net/khach-san-suoi-nuoc-nong-bang-go-co-nhat-nhat-ban-4205983.html
        </link>
        <guid>
            https://vnexpress.net/khach-san-suoi-nuoc-nong-bang-go-co-nhat-nhat-ban-4205983.html
        </guid>
        <slash:comments>
            0
        </slash:comments>
    </item>
`

const getItem = (strStart,strEnd) =>{
    let start = item.indexOf(strStart) + strStart.length;
    let end = item.indexOf(strEnd)
    const content = item.substring(start,end).trim();
    return content;
}

const getContent = () => {
    let title = getItem("<title>","</title>");
    let date = getItem("<pubDate>","</pubDate>");
    console.log(title);
    console.log(date);

}

getContent();
