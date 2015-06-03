<GameProjectFile>
  <PropertyGroup Type="Layer" Name="TaskLayer" ID="7fe390c4-ab8e-41a8-96ef-60aebdf96316" Version="2.2.8.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="0" Speed="1.0000" />
      <ObjectData Name="Layer" Tag="51" ctype="GameLayerObjectData">
        <Size X="960.0000" Y="640.0000" />
        <Children>
          <AbstractNodeData Name="taskPanel" ActionTag="428603924" Tag="2" IconVisible="False" LeftMargin="42.7701" RightMargin="228.2299" TopMargin="35.9283" BottomMargin="79.0717" ctype="SpriteObjectData">
            <Size X="689.0000" Y="525.0000" />
            <Children>
              <AbstractNodeData Name="task text" ActionTag="394791246" Tag="8" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="17.0000" RightMargin="17.0000" TopMargin="59.2500" BottomMargin="426.7500" ctype="SpriteObjectData">
                <Size X="655.0000" Y="39.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="344.5000" Y="446.2500" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.8500" />
                <PreSize X="0.9507" Y="0.0743" />
                <FileData Type="Normal" Path="TaskScene/task-question.png" Plist="" />
                <BlendFunc Src="1" Dst="771" />
              </AbstractNodeData>
              <AbstractNodeData Name="materialPanel" ActionTag="-1385976828" Tag="7" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="229.0000" RightMargin="229.0000" TopMargin="145.0000" BottomMargin="40.0000" ctype="SpriteObjectData">
                <Size X="231.0000" Y="340.0000" />
                <Children>
                  <AbstractNodeData Name="vocabText" ActionTag="42488325" Tag="45" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentWidthEnabled="True" LeftMargin="23.1000" RightMargin="23.1000" TopMargin="22.5000" BottomMargin="277.5000" IsCustomSize="True" FontSize="28" LabelText="Text Label" OutlineSize="1" ShadowOffsetX="2" ShadowOffsetY="-2" ctype="TextObjectData">
                    <Size X="184.8000" Y="40.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="115.5000" Y="297.5000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.8750" />
                    <PreSize X="0.8000" Y="0.1176" />
                    <OutlineColor A="255" R="255" G="0" B="0" />
                    <ShadowColor A="255" R="255" G="127" B="80" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="344.5000" Y="210.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.4000" />
                <PreSize X="0.3353" Y="0.6476" />
                <FileData Type="Normal" Path="TaskScene/material-panel.png" Plist="" />
                <BlendFunc Src="1" Dst="771" />
              </AbstractNodeData>
              <AbstractNodeData Name="apple_15" ActionTag="1656203238" Tag="21" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="274.0000" RightMargin="274.0000" TopMargin="257.2500" BottomMargin="99.7500" ctype="SpriteObjectData">
                <Size X="141.0000" Y="168.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="344.5000" Y="183.7500" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.3500" />
                <PreSize X="0.2046" Y="0.3200" />
                <FileData Type="Normal" Path="TaskScene/apple.png" Plist="" />
                <BlendFunc Src="1" Dst="771" />
              </AbstractNodeData>
              <AbstractNodeData Name="goBtn" ActionTag="-924121864" CallBackType="Click" CallBackName="onGoBtnClicked" Tag="4" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="481.8700" RightMargin="27.1300" TopMargin="438.5000" BottomMargin="39.5000" TouchEnable="True" FontSize="14" Scale9Enable="True" LeftEage="15" RightEage="15" TopEage="11" BottomEage="11" Scale9OriginX="15" Scale9OriginY="11" Scale9Width="150" Scale9Height="25" OutlineSize="1" ShadowOffsetX="2" ShadowOffsetY="-2" ctype="ButtonObjectData">
                <Size X="180.0000" Y="47.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="571.8700" Y="63.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.8300" Y="0.1200" />
                <PreSize X="0.2612" Y="0.0895" />
                <TextColor A="255" R="65" G="65" B="70" />
                <DisabledFileData Type="Normal" Path="TaskScene/go-button-hover.png" Plist="" />
                <PressedFileData Type="Normal" Path="TaskScene/go-button-down.png" Plist="" />
                <NormalFileData Type="Normal" Path="TaskScene/go-button-normal.png" Plist="" />
                <OutlineColor A="255" R="255" G="0" B="0" />
                <ShadowColor A="255" R="255" G="127" B="80" />
              </AbstractNodeData>
              <AbstractNodeData Name="hintBtn" ActionTag="-1008425069" CallBackType="Click" CallBackName="onHintBtnClicked" Tag="6" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="13.9000" RightMargin="565.1000" TopMargin="408.5000" BottomMargin="9.5000" TouchEnable="True" FontSize="14" Scale9Enable="True" LeftEage="15" RightEage="15" TopEage="11" BottomEage="11" Scale9OriginX="15" Scale9OriginY="11" Scale9Width="80" Scale9Height="85" OutlineSize="1" ShadowOffsetX="2" ShadowOffsetY="-2" ctype="ButtonObjectData">
                <Size X="110.0000" Y="107.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="68.9000" Y="63.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.1000" Y="0.1200" />
                <PreSize X="0.1597" Y="0.2038" />
                <TextColor A="255" R="65" G="65" B="70" />
                <DisabledFileData Type="Normal" Path="TaskScene/hint-button-normal.png" Plist="" />
                <PressedFileData Type="Normal" Path="TaskScene/hint-button-normal.png" Plist="" />
                <NormalFileData Type="Normal" Path="TaskScene/hint-button-normal.png" Plist="" />
                <OutlineColor A="255" R="255" G="0" B="0" />
                <ShadowColor A="255" R="255" G="127" B="80" />
              </AbstractNodeData>
            </Children>
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="387.2701" Y="341.5717" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.4034" Y="0.5337" />
            <PreSize />
            <FileData Type="Normal" Path="TaskScene/task-panel.png" Plist="" />
            <BlendFunc Src="1" Dst="771" />
          </AbstractNodeData>
          <AbstractNodeData Name="cook_2" ActionTag="-536673801" Tag="3" IconVisible="False" LeftMargin="749.4803" RightMargin="10.5197" TopMargin="338.3574" BottomMargin="20.6426" ctype="SpriteObjectData">
            <Size X="200.0000" Y="281.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="849.4803" Y="161.1426" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.8849" Y="0.2518" />
            <PreSize />
            <FileData Type="Normal" Path="TaskScene/cook.png" Plist="" />
            <BlendFunc Src="1" Dst="771" />
          </AbstractNodeData>
        </Children>
      </ObjectData>
    </Content>
  </Content>
</GameProjectFile>