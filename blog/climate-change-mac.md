# Climate Change: Using MACs to Quantify Solutions

<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPzRedKUVsvsSHOPkkGbObV0-v9BYT-wAGRtyZ1RpXHciVbYhE61u-Hd9dvljLaa4hF_xD7IiowJIJ9SnCTIqKtBwJ9bCusSvhtSalpqZHVgIr2XNVbr9RBCI5rZBbqpvo7zerB2W1vDjLGghjgRq1CDrMbXzk0e1NSDpU9WWXm04-vhr4u1tgM3TYcw/w640-h392/gmst-history-data.png" class="media-img" />

<div class="media-container">
<blockquote>
<p>A summary of my school project in the form research comparing multiple climate change solutions using MACs.</p>
</blockquote>

## A <b>Pressing</b> Problem
Climate change is an important issue taking the toll over the last century. Ever since its discovery in the 20<sup>th</sup> century, people have increased awareness about the problem. Most of you have probably heard climate change as a term, but for now let's really point down what it says. The chart you see on top shows the Global Mean Surface Temperature (GMST) of Earth - simply the average temperature on our planet's surface - up to the last few years, and several model scenarios. The temperature is measured relative to the <code>1850-1900</code> period, which is before mass industrialization took place.</p>
As clearly indicated by the chart, surface temperatures have risen dramatically ever since the industrial revolution had begun. Most of the change, as shown by the red line, is caused by human activity, and much less is caused by natural phenomenon. Predictions have not shown considerable slowdowns even in the best case. This rabid warmup of the planet is called global warming, and the changes in cliamte patterns due to it is called climate change.
Despite the doomsday prophets, even if everything is trying to show a "climate doom", it may be the <i>absolute</i> <b>worst</b> case. Even if warming happens, and it is, limimting the increase still has benefits. The <a href="https://www.ipcc.ch/sr15">IPCC analysis</a> resulting in the aforementioned chart also mentions that current emissions alone would <b>at most</b> add 0.5 degrees Celsius of warming over 2-3 decades or even centuries. In other words, these 'worrying' emissions are actually relatively small in the long run, lest we mercilessly pump more of the same stuff into our atmosphere. Nevertheless, the effects *does* scale pretty severely with temperature rise, due to how complex and nuanced the climate system is (even supercomputers struggle to model these kinds of things), and a change of 0.5 degrees Celsius has been shown to bring about very noticeable effects. So please, use this as a reminder of hopeful action and not nihilistic negligence.

## Research <b>Purpose</b>
This research is made to guide future efforts in managing climate change solutions. Now, to be clear every single reduction is a win, but realistically other things also matter, such as cost-effectiveness, which is what I seek to optimize in this case.

## <b>Units</b> and <b>Fundamental Concepts</b>: CO<sub>2</sub>eq and MAC
Now, because we want to mitigate climate change, and do so at a cheap rate, we can say we want to minimize global warming cheaply, but how do we quantify how mcuh global warming is reduced by our actions? Now, it's a fortunate thing we know that cliamte change is mostly driven by greenhouse gases, so we can define the cost-effectiveness of a solution as how much we need to pay to remove those gases. We also thankfully know a lot about what kinds of gases drive up emissions, which means we can simply screen for those. Nonetheless, we still have some pretty unwanted problems:

Say I have two options between a coal stove and a gas stove. The coal stove emits 1 kg of CO2 daily with my usage, while the gas stove emits 200 grams of methane (CH4) daily. So, one day I decide to sell my coal stove and buy a gas one in lieu. Surely I've helped reduce climate change, because I emit only a fifth of what I used to, right? Unfortunately, *no*. **Methane is more than 20 times more potent than carbon dioxide, so I actually am making more than four times the trouble I used to**.

To avoid these kinds of disappointments, both the cost and *warming effect* (not pollution) is needed. Cost is as straightforward as the price tag of the device you're reading this on: it's just a currency and pretty much well-established at this point so inflation and conversions are the only weak links. 

Warming effects, however, are a bit more pickly, and depends on a lot of factors. In spite of this researchers have noticed the issue and devised CO<sub>2</sub>eq (also known as CO<sub>2</sub>e or fully spelled as CO<sub>2</sub> equivalent or carbon dioxide equivalnt - any is valid), a measure ranking the quantity <i>and</i> effect of emissions. As expected, the same composition of emissions will have a CO<sub>2</sub>eq proportional to its amount, but also different compositions are accounted fairly based on the effect they impose, not only on their amount. By definition, 1 unit of CO<sub>2</sub>eq is the effect of 1 unit of CO<sub>2</sub> (unit can be any reasonable amount: g, kg, metric ton, and others). Even though this is always well-defined for a pure carbon dioxide emission, other sources, like methane, have varying potency. It is only around 20-40 times warmer than carbon dioxide short-term, but that jumps to 80 long-term, so these kinds of things do matter.

Naturally, to quanity the cost-efficiency we use the Marginal Abatement Cost (MAC). This can be seen as the 'unit price' to reduce emissions by a certain amount -- marginal cost means the change in cost per quantity, while means reduction, so taken litearlly MAC is the cost per unit reduction. 

Costs are - as previously mentioned - trickiest during conversions and inflations. To deal with this, I converted all costs to US Dollars and then accounted for inflation (from the year of the given currency to 2022). 

Note that while these concepts are commonly used, my decisions on handling currency and other nuances may or may not reflect broader consensus, and different researches may use different conventions. Handle these with care.

## Research <b>Method</b>
Because I can't do lifecycle analysis for the many solutiosn that can be presented, I hereby use a literary review instead. Because I want to see how variable the costs are, apart from their absolute values, I'll use a range, but if that's not given I'll just take the point value. My particular sample involves free open-access publication using public technologies in Asian countries, published during or after 2018. Other than that I picked the sources quite randomly according to what I can get.

### <i>NOTE:</i> <b>Searching</b> for Sources
<p>To use only trusted sources, I have used <a href="https://scholar.google.com/">Google Scholar</a> instead of normal Google. When searching, the top results are read first (as normal). However, this creates potential bias towards well-ranking results compared to low-ranking ones. Despite knowing it to be optimized for research, I have no information on how the search engine works and any possible biases. This may or may not be impactful, so do take good note of this and perform additional research on the topic if deemed neccessary.</p>

## Collected Data and Processing
<p>The table of collected data follow:</p>
<table>
<thead>
<tr>
<th>Technology / Solution</th>
<th>Min. MAC ($2022 / ton CO2eq)</th>
<th>Max. MAC ($2022 / ton CO2eq)</th>
</tr>
</thead>
<tbody>
<tr>
<td>Behavioral energy efficiency</td>
<td>-215</td>
<td>-215</td>
</tr>
<tr>
<td>Corn starch ethanol (US)</td>
<td>-20</td>
<td>350</td>
</tr>
<tr>
<td>Renewable Portfolio Standards</td>
<td>0</td>
<td>215</td>
</tr>
<tr>
<td>Reforestation</td>
<td>1</td>
<td>11</td>
</tr>
<tr>
<td>Wind energy subsidies</td>
<td>2</td>
<td>294</td>
</tr>
<tr>
<td>Clean Power Plan</td>
<td>12</td>
<td>12</td>
</tr>
<tr>
<td>Gasoline tax</td>
<td>20</td>
<td>53</td>
</tr>
<tr>
<td>Methane flaring regulation</td>
<td>22</td>
<td>22</td>
</tr>
<tr>
<td>Reducing federal coal leasing</td>
<td>37</td>
<td>76</td>
</tr>
<tr>
<td>CAFE Standards</td>
<td>54</td>
<td>350</td>
</tr>
<tr>
<td>Agricultural emissions policies</td>
<td>56</td>
<td>73</td>
</tr>
<tr>
<td>National Clean Energy Standard</td>
<td>57</td>
<td>124</td>
</tr>
<tr>
<td>Soil management</td>
<td>64</td>
<td>64</td>
</tr>
<tr>
<td>Livestock management policies</td>
<td>80</td>
<td>80</td>
</tr>
<tr>
<td>Concentrating solar power expansion (China &amp; India)</td>
<td>113</td>
<td>113</td>
</tr>
<tr>
<td>Renewable fuel subsidies</td>
<td>113</td>
<td>113</td>
</tr>
<tr>
<td>Low carbon fuel standard</td>
<td>113</td>
<td>3282</td>
</tr>
<tr>
<td>Solar photovoltaics subsidies</td>
<td>158</td>
<td>2376</td>
</tr>
<tr>
<td>Biodiesel</td>
<td>169</td>
<td>282</td>
</tr>
<tr>
<td>Energy efficiency programs (China)</td>
<td>282</td>
<td>339</td>
</tr>
<tr>
<td>Cash for Clunkers</td>
<td>305</td>
<td>475</td>
</tr>
<tr>
<td>Weatherization assistance program</td>
<td>396</td>
<td>396</td>
</tr>
<tr>
<td>Dedicated battery electric vehicle subsidy</td>
<td>396</td>
<td>724</td>
</tr>
<tr>
<td>Solar energy (Thailand, 2015)</td>
<td>59</td>
<td>189</td>
</tr>
<tr>
<td>Wind power (Thailand, 2015)</td>
<td>30</td>
<td>45</td>
</tr>
<tr>
<td>Hydro energy (Thailand, 2015)</td>
<td>-172</td>
<td>-70</td>
</tr>
<tr>
<td>E-fuel (small-scale deployment, projected values until 2050)</td>
<td>1022</td>
<td>1533</td>
</tr>
<tr>
<td>E-fuel (large-scale deployment, projected values until 2050)</td>
<td>25</td>
<td>344</td>
</tr>
<tr>
<td>Low carbon concrete</td>
<td>58</td>
<td>349</td>
</tr>
</tbody>
</table>

As seen, the range of values is considerably large, but contains negative values as well, a simple log scale is not feasible.To solve this problem, I use a custom normalization method. This involves using a linear normalization to convert the values from 0 to 1, adding 1, and then taking the natural log of the value. Formally, with $M_{min}$ being the minimum MAC, $M_{max}$ being the maximum MAC, and $M$ being the current MAC, the normalized value is:

$$\ln{(\frac{M - M_{min}}{M_{max} - M_{min}}+1)}$$

Formula: Normalization formula used.

Here both maximum and minimum MACs are processed altogether. As a result, the ranges are still valid after the process and no quirks will occur. Additionally, the natural log is called with a value between 1 and 2, thereby preventing undefined (or even negative) values from appearing. The absolute minimum is $\ln{(1)}=0$ if $M=M_{min}$. Note that this will make the minimum value invisible in the plot, but may be solvable by adding an offset and is related with plotting rather than data processing.

## Final <b>Results</b> and <b>Conclusion</b>
For plotting the data I use a span chart. Some people mistake it for a bar chart because they look similar. However, a span chart is ideal for ranges. A span chart's bars show ranges of values, and the height of the top and bottom sides show the actual values. Therefore the height of a bar corresponds to the range or uncertainty of the value, and its vertical position refers to its value. Due to the sheer amount of data shown, the chart is unable to label each value clearly. As a result an interactive plot is used. The final result is attached below:</p>

<iframe src="/blog/climate-change-mac-plot.html" style="width:100%;min-height: 320px"></iframe>

Behavioral energy efficiency is the lowest, and may be very difficult to target. For all other visible bars, hovering/tapping on the blue part gives information on the name of the solution and the normalized values as used on the chart. The fact that behavioral energy efficiency is the most effective solution should be no surprise. It costs nothing to start saving resources, and it helps in many ways. It makes economic sense. And environmental sense. And it reduces infrastructure load. This is the best for all: you don't need the lights on for a closed room/office anyway....

However, another observation is the massive variability some policy-based solutions have. This is clearly visible by the long bars. My suggested explanation boils down to inconsistencies, where despite having the same concept, different governments may implement the policies differently, and the response may also be varying. Moreover, some things, like solar panels, depend a lot on geographical conditions, so well-placed deployments may see better returns than those on unforgiving land. Therefore, policies and technological solutions really need to take into account the nuances of where they are being deployed, and that consideration must be accounted for when deciding what technology to use.

So, the key takeaway for normal people is simple: every action taken counts! Nothing is too small to do, since if more and more people do it the collective results are massive and <b>not</b> negligible.

<div class="section-split"></div>

## Attachments

[My research paper](<../media/Climate Change MAC Article.pdf>)
[My presentation poster](<../media/Climate Change MAC Research Poster 2023 FINAL.pdf>)

</div>