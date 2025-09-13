import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BlurView } from "expo-blur";
import CLOSE from "../../../assets/images/talktalk/close.png";
import { SentenceRow } from "./SentenceRow";
import Dialog from "../../../components/dialog/Dialog";
import { truncateText } from "../../../utils/truncateText";
import { useDialogOpen } from "../../../hooks/useDialogOpen";

export const SentenceModal = ({ visible, onClose, sentences }) => {
  const {
    deleted,
    dialogVisible,
    targetIndex,
    targetItem,
    openDialog,
    handleRealDelete,
    handleCancel,
  } = useDialogOpen();

  return (
    <Modal visible={visible} transparent>
      <View style={modalStyles.overlay}>
        <BlurView
          style={modalStyles.backgroundBlur}
          tint="light"
          intensity={100}
        />
        <View style={modalStyles.modalContainer}>
          <View style={modalStyles.content}>
            <View style={modalStyles.titleBox}>
              <Text style={modalStyles.titleText}>즐겨찾기 문장들</Text>
            </View>
            <TouchableOpacity onPress={onClose}>
              <Image source={CLOSE} style={modalStyles.closeButton} />
            </TouchableOpacity>
          </View>
          <View style={modalStyles.sentence}>
            {sentences.map((sentence, index) => {
              if (deleted.includes(index)) return null;
              return (
                <SentenceRow
                  key={index}
                  index={index}
                  text={sentence}
                  deleted={deleted}
                  onDelete={() => openDialog(index, sentence)}
                  isPending={index === targetIndex}
                />
              );
            })}
          </View>
        </View>

        <Dialog
          visible={dialogVisible}
          title="즐겨찾기 문장 삭제"
          message={`[${truncateText(targetItem)}]`}
          subMessage="즐겨찾기 한 문장을 삭제할까요?"
          cancelText="취소"
          confirmText="삭제하기"
          onCancel={handleCancel}
          onConfirm={handleRealDelete}
        />
      </View>
    </Modal>
  );
};

const modalStyles = StyleSheet.create({
  overlay: {
    flex: 1,
  },

  modalContainer: {
    height: 604.67,
    backgroundColor: "#FFEC9F",
    borderTopLeftRadius: 16.67,
    borderTopRightRadius: 16.67,
    marginTop: 65,
  },

  backgroundBlur: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 89,
  },

  content: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: 11.67,
    gap: 98.33,
  },

  titleBox: {
    marginTop: 15.67,
    backgroundColor: "#FFD321",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16.67,
  },

  titleText: {
    paddingHorizontal: 10,
    paddingVertical: 6.67,
    color: "#4E4E4E",
    fontSize: 13,
    fontFamily: "PretendardSemiBold",
    lineHeight: 13,
  },

  closeButton: {
    width: 16,
    height: 16,
  },

  sentence: {
    flexDirection: "column",
    alignItems: "center",
    gap: 15.33,
    paddingVertical: 10,
  },
});
