export default function GaugeController({ $parent }) {
    const $selectedGauge = document.createElement("div")
    const $selectedGaugeContainer = document.createElement("div")

    $selectedGaugeContainer.className = "selectedGaugeContainer"
    $selectedGauge.className = "selectedGauge"

    this.render = () => {
        $selectedGaugeContainer.appendChild($selectedGauge)
        $parent.appendChild($selectedGaugeContainer)
    }

    this.enterSelected = () => {
        var $gauge = document.querySelector('.selectedGauge')
        $gauge.style.width = '100%'
        $gauge.addEventListener('transitionend', function handleTransitionEnd() {
            if($gauge.style.width=== '100%') {alert('어이어이')}
            $gauge.removeEventListener('transitionend', handleTransitionEnd);
        });
    }

    this.leaveSelected = () => {
        var $gauge = document.querySelector('.selectedGauge')
        $gauge.style.width = '0%'
    }
}